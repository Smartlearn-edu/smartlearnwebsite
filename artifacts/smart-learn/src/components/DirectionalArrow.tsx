import { ArrowLeft, ArrowRight } from "lucide-react";
import { useT } from "@/i18n";

interface Props {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function DirectionalArrow({ size = 16, className, style }: Props) {
  const { isRTL } = useT();
  const Icon = isRTL ? ArrowLeft : ArrowRight;
  return <Icon size={size} className={className} style={style} />;
}
