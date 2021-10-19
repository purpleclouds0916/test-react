// eslint-disable-next-line
const java: any = require('java');
// eslint-disable-next-line
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// カレントディレクトリ
console.log(`Current dir = ${process.cwd()}`);

// Javaの実行ファイルをパスに追加(jarファイルはカレントディレクトリに配置する)
// eslint-disable-next-line
// @ts-ignore
// eslint-disable-next-line
java.classpath.push('OptimThinningJNI-1.0.jar');

// 使いたいクラスをオブジェクトにする
// cuOptimThinning.dllは.\node_modules\に配置. (失敗してもエラーメッセージでどこに配置すれば良いか示される)
// eslint-disable-next-line
// @ts-ignore
// eslint-disable-next-line
const javaObject = java.import('thinningoptim.SA2021');

const Test = () => {
  // eslint-disable-next-line
  // @ts-ignore
  // eslint-disable-next-line
  const handleClick = (): void => {};

  return <div>今日の天気</div>;
};

export default Test;
