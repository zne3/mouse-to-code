import React from 'react';
import { render, Artboard, Text, View } from 'react-sketchapp';

const Document = () => (
  <Artboard name="Hi React-sketchapp" style={{
    padding: 50
  }}>
    <Text>Hi, Designer!</Text>
  </Artboard>
)

export default (context) => {
  render(<Document />, context.document.currentPage())
}
