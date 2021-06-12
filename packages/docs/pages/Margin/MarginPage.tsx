import { Button, H1, Panel, Tabs, Text } from '@bigcommerce/big-design';
import React, { useContext } from 'react';

import { ActiveTabContext, CodePreview, NextLink } from '../../components';
import { MarginPropTable } from '../../PropTables';

const MarginPage = () => {
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);
  const tabItems = [
    { id: 'examples', title: 'Examples' },
    { id: 'code', title: 'Code' },
  ];

  const renderTabs = () => {
    switch (activeTab) {
      case 'code':
        return <MarginPropTable />;
      case 'examples':
      default:
        return (
          <>
            <Panel>
              <CodePreview>
                {/* jsx-to-string:start */}
                <Button margin="medium">Example</Button>
                {/* jsx-to-string:end */}
              </CodePreview>
            </Panel>
            <Panel header="Responsive breakpoints">
              <Text>
                You can also specify margins with an object to handle different margins with different{' '}
                <NextLink href="/Breakpoints/BreakpointsPage" as="/breakpoints">
                  breakpoints
                </NextLink>
                . All values must be of{' '}
                <NextLink href="/Spacing/SpacingPage" as="/spacing">
                  Spacing
                </NextLink>{' '}
                type.
              </Text>

              <CodePreview>
                {/* jsx-to-string:start */}
                <Button margin={{ mobile: 'none', tablet: 'medium', desktop: 'xLarge' }}>Example</Button>
                {/* jsx-to-string:end */}
              </CodePreview>
            </Panel>
          </>
        );
    }
  };

  return (
    <>
      <H1>Margin</H1>

      <Text>
        Some of our components expose a simple way to modify their margin. The following example showcases the simples
        way to use the margin prop by giving it a{' '}
        <NextLink href="/Spacing/SpacingPage" as="/spacing">
          Spacing
        </NextLink>{' '}
        value.
      </Text>

      <Tabs activeTab={activeTab} items={tabItems} onTabClick={setActiveTab} />

      {renderTabs()}
    </>
  );
};

export default MarginPage;
