import React from "react";
import {
  QueryClientProvider,
  QueryClient,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CharacterLoader from "component/CharacterLoader/CharacterLoader";
import { FavoriteProvider } from "context/FavoritesContext";
import { DisabledStateProvider } from "context/DisabledStateContext";
import { Global } from "./global";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>

        <FavoriteProvider>

          <DisabledStateProvider>

            <Global />

            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary
                  onReset={reset}
                  fallbackRender={({ resetErrorBoundary }) => (
                    <div>
                      There was an error!
                      <button onClick={() => resetErrorBoundary()}>
                        Try again!
                      </button>
                    </div>
                  )}
                >

                  <CharacterLoader />

                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>

            <ReactQueryDevtools initialIsOpen={false} />

          </DisabledStateProvider>

        </FavoriteProvider>
        
      </QueryClientProvider>
    </>
  );
};

export default App;
