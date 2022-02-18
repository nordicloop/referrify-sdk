export type ExecutionEnvironment = "node" | "browser"

export function getExecutionEnvironment(): ExecutionEnvironment | undefined {
  // @ts-ignore
  if (typeof module === "object" && typeof module.exports === "object") {
    return "node";
  }

  if (typeof window !== "undefined" && typeof window.document !== "undefined") {
    return "browser"
  }

  return undefined
}
