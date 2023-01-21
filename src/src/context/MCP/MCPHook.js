import { useContext } from "react";
import MCPContext from "./MCPContext";

function useMCPContext() {
  const [state, dispatch] = useContext(MCPContext)
  return [state, dispatch]
}

export default useMCPContext
