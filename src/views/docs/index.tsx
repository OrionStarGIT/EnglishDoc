import React from "react";

import { PageContext } from "@common/types";
import {
  GenericComponent,
  LayoutType,
} from "@components/generic-documentation";

import { DocsPageContext } from "@typings/docs";
import { PreviewPageContext } from "@typings/common";

import { VersionSwitcher } from "./components";

const DocsView: React.FunctionComponent<PageContext<
  DocsPageContext & PreviewPageContext
>> = ({ pageContext }) => {
  const {
    version,
    versions,
    content: { id: topic, type: docsType },
    inPreview,
  } = pageContext;

  const numberOfVersions = Object.keys(versions).reduce(
    (acc, cur) => acc + versions[cur].length,
    0,
  );

  const docsVersionSwitcher =
    numberOfVersions < 2 || inPreview ? null : (
      <VersionSwitcher
        version={version}
        versions={versions}
        docsType={docsType}
        topic={topic}
      />
    );

  return (
    <GenericComponent
      pageContext={pageContext}
      layout={LayoutType.DOCS}
    
    />
  );
};

export default DocsView;
