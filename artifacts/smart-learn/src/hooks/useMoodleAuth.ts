import { useState, useEffect } from "react";

export interface MoodleUser {
  loggedin: true;
  name: string;
  firstname: string;
  picture: string;
  dashboardUrl: string;
}

export type MoodleAuthState =
  | { loading: true; loggedin: false }
  | { loading: false; loggedin: false }
  | ({ loading: false } & MoodleUser);

const MOODLE_URL =
  (import.meta.env.VITE_MOODLE_URL as string | undefined) ||
  "https://smartlearn.education";

const WHOAMI_URL = `${MOODLE_URL}/local/customhome/whoami.php`;

export function useMoodleAuth(): MoodleAuthState {
  const [state, setState] = useState<MoodleAuthState>({
    loading: true,
    loggedin: false,
  });

  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      try {
        const res = await fetch(WHOAMI_URL, {
          method: "GET",
          credentials: "include",
          headers: { Accept: "application/json" },
          signal: AbortSignal.timeout(5000),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        if (cancelled) return;

        if (data.loggedin) {
          setState({
            loading: false,
            loggedin: true,
            name: data.name,
            firstname: data.firstname,
            picture: data.picture,
            dashboardUrl: data.dashboardurl,
          });
        } else {
          setState({ loading: false, loggedin: false });
        }
      } catch {
        if (!cancelled) setState({ loading: false, loggedin: false });
      }
    };

    check();
    return () => { cancelled = true; };
  }, []);

  return state;
}
