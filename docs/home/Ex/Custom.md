---
---
# Custom Usage
* [MDXComponents 구성](https://github.com/4Tel/4Tel.github.io/blob/main/src/theme/MDXComponents.tsx)
* [component 구성](https://github.com/4Tel/4Tel.github.io/tree/main/src/components)
## Card
### Column Fix
<ColumnSection columns={3}>
  <Card
    title='test'
    to="./Custom"
    text='123sdfasdfdsafasdfasfsdafasdff'/>
  <Card
    title="test2"
    to="./Custom"
  />
  <Card
    title="test3"
    to="./Custom"
  />
  <Card
    title="test4"
    to="./Custom"
  />
</ColumnSection>

### Width Fix
<WidthSection width='200px'>
  <Card
    title='test'
    to="./Custom"
    text='123sdfasdfdsafasdfasfsdafasdff'/>
  <Card
    title="test2"
    to="./Custom"
  />
  <Card
    title="test3"
    to="./Custom"
  />
  <Card
    title="test4"
    to="./Custom"
  />
</WidthSection>

## <Glossary id="Glossary"></Glossary>
<Glossary text='markdown usage'>
  ### markdown usage
  * dot list
  1. number list
</Glossary> <br/>
<Glossary text='file usage' fpath='/_Glossary.md'/>
* <Glossary id="docusaurus"></Glossary> is docusaurus
* <Glossary id="markdown"/> is markdown
* <Glossary id="markdown" text="another text"/> is markdown too.

## Highlight
<Highlight back='blue'>Highlight</Highlight>
<FontColor font='red'>FontColor</FontColor>
