/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

export default ({
  description,
}: {
  description?: string;
}) => (
  <>
    <h1 className="h1">
    林業の経営最適化シミレーション
    </h1>
    <p>{description}</p>
  </>
);
