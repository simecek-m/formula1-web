import theme from "theme";
import { faFrown } from "@fortawesome/free-regular-svg-icons";

export function unsupportedFeature() {
  return {
    icon: faFrown,
    title: "Unsupported feature",
    text: "This feature is not yet supported. Try again later.",
    color: theme.color.white,
    background: theme.status.danger
  };
}
