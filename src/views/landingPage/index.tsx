import React, { useRef } from "react";

import { PageContext } from "@typings/common";
import { LandingPageContext } from "@typings/landingPage";

import IndexPage from './pageIndex'
import Header from './Header';
/* import { Headline } from "./Headline";
import { WhatIs } from "./WhatIs";
import { ExtensionsAndTools } from "./ExtensionsAndTools";
import { Adopters } from "./Adopters";
import { Newsroom } from "./Newsroom";
import { Manifesto } from "./Manifesto";
import { Features } from "./Features";
import { UsedBy } from "./UsedBy";
import { Nutshell } from "./Nutshell";
import { CheckItOut } from "./CheckItOut"; */

const LandingPageView: React.FunctionComponent<PageContext<
  LandingPageContext
>> = ({ pageContext: { adopters, latestBlogPosts } }) => {
  const scrollRef = useRef<HTMLElement>(null);
  return (
    <>
    <div style={{'position': 'absolute', 'top': 0, 'left': 0}}>
      <Header></Header>
      <IndexPage></IndexPage>
    </div>
    
      {/* <Manifesto scrollRef={scrollRef} /> */}
      {/* <Features scrollRef={scrollRef} /> */}
      {/* <Nutshell /> */}
      {/* <CheckItOut /> */}
      {/* <UsedBy adopters={adopters} /> */}

      {/* <Headline />
      <WhatIs />
      <ExtensionsAndTools />
      <Newsroom latestBlogPosts={latestBlogPosts} />
      <Adopters adopters={adopters} /> */}
    </>
  );
};

export default LandingPageView;
