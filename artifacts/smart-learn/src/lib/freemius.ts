export interface FreemiusPurchaseResponse {
  user?: {
    id?: number | string;
    email?: string;
    first_name?: string;
    last_name?: string;
  };
  license?: {
    id?: number | string;
    key?: string;
    secret_key?: string;
    expiration?: string | null;
  };
  plan?: {
    id?: number | string;
    name?: string;
    title?: string;
  };
  [key: string]: unknown;
}

export interface FreemiusCheckoutConfig {
  productId: string | number;
  planId?: string | number;
  publicKey: string;
  image?: string;
  name?: string;
  licenses?: number;
  onPurchaseCompleted?: (response: FreemiusPurchaseResponse) => void;
  onSuccess?: (response: FreemiusPurchaseResponse) => void;
  onCancel?: () => void;
}

declare global {
  interface Window {
    FS?: {
      Checkout: new (options: {
        product_id: string | number;
        plan_id?: string | number;
        public_key: string;
        image?: string;
      }) => {
        open: (options: {
          name?: string;
          licenses?: number;
          purchaseCompleted?: (response: FreemiusPurchaseResponse) => void;
          success?: (response: FreemiusPurchaseResponse) => void;
          cancel?: () => void;
        }) => void;
      };
    };
  }
}

/**
 * Loads the Freemius SDK dynamically if not already loaded on window.
 */
export async function loadFreemiusSDK(): Promise<boolean> {
  if (typeof window === "undefined") return false;
  if (window.FS && window.FS.Checkout) return true;

  return new Promise((resolve) => {
    const existing = document.querySelector('script[src*="checkout.freemius.com"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(true));
      setTimeout(() => resolve(Boolean(window.FS && window.FS.Checkout)), 1500);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.freemius.com/js/v1/";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
}

/**
 * Opens the native Freemius checkout modal.
 */
export async function openFreemiusCheckout(config: FreemiusCheckoutConfig): Promise<boolean> {
  const ready = await loadFreemiusSDK();
  if (!ready || !window.FS?.Checkout) {
    console.error("Freemius SDK could not be loaded");
    return false;
  }

  try {
    const handler = new window.FS.Checkout({
      product_id: String(config.productId),
      plan_id: config.planId ? String(config.planId) : undefined,
      public_key: config.publicKey,
      image: config.image || "https://services.smartlearn.education/logo.png",
    });

    handler.open({
      name: config.name || "SmartLearn Plugin",
      licenses: config.licenses ?? 1,
      purchaseCompleted: (response) => {
        if (config.onPurchaseCompleted) config.onPurchaseCompleted(response);
      },
      success: (response) => {
        if (config.onSuccess) config.onSuccess(response);
      },
      cancel: () => {
        if (config.onCancel) config.onCancel();
      },
    });

    return true;
  } catch (err) {
    console.error("Failed to open Freemius checkout:", err);
    return false;
  }
}
