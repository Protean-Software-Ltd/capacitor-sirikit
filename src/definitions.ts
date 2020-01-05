declare module "@capacitor/core" {
  interface PluginRegistry {
    SiriKit: SiriKitPlugin;
  }
}

export interface SiriKitPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
