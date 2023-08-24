import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AsyncComponent } from "@async-component";
import mockModuleList from "./module.json";

function Router() {
  console.log("ROUTER");
  return (
    <BrowserRouter>
      {/* <Routes> */}
      {mockModuleList.map((moduleName, id) => {
        console.log(`@modules/${moduleName}/route.js`);

        const LazyComponent = React.lazy(async () => {
          const module = await import(`@modules/${moduleName}/route.js`);
          return {
            default: module.default,
          };
        });
        return (
          <Suspense key={id} fallback={<div>Loading...</div>}>
            <AsyncComponent
              key={id}
              loader={async () =>
                await import(`@modules/${moduleName}/route.js`)
              }
            />
          </Suspense>

          // <Route
          //   key={id}
          //   path="/"
          //   element={
          //     <Suspense fallback={<div>Loading...</div>}>
          //       <LazyComponent />
          //     </Suspense>
          //   }
          // />
        );
      })}
      {/* </Routes> */}
    </BrowserRouter>
  );
}

export default Router;
