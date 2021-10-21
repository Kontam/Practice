// 実行する関数
const sampleFunc = (value) => {
// asyncの効果は各functionブロックで切れるので逐一指定が必要
    return new Promise(resolve => { 
        // 2秒待ってから計算結果をresolveする
        setTimeout(() => {
            console.log('Calculating...');
            resolve(value * 2);
        }, 2000);
    })
}
 
// 対象の反復オブジェクト
const targetArr = [1, 2, 3].map(sampleFunc);
 
// for await...of文は必ずasyncの中で
(async () => {
  for await (const num of targetArr) {
    // 関数の実行結果を格納して表示
    console.log(num);
  }
})();
