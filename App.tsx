import React, { FC } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import useCachedResources from "./src/hooks/useCachedResources";
import { AuthNavigator } from "./src/navigators";
import { theme } from "./src/core/theme";

const App: FC = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <StatusBar hidden={true} />
          <AuthNavigator />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
};

export default App;
