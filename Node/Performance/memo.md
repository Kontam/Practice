## 実行結果から使えそうなプロパティ
- categories.performance.score これを*100するとhtmlのスコア
- timing.entries.name　ここからfirst-contentful-paintなどの項目が取れる

## json以外の選択肢
- json意外にhtmlとcsvがだせる
- htmlはいつものやつ viewerを使えばjsonを食わせてHTMLを取れるのでjsonが両対応で良さそう
- csvは少ない 1点満点のスコアしか取れず、timingは取れない？ optionを追加すれば情報が増えるかも

## jsonの使い道
- jsonをviewerに読ませればそれだけでHTML出力と同じものが見える
- フルのjsonが8000行　htm1個400KB　そこそこ
- optionで検証項目を選べる。only performanceもできるし、その中からfirst-contentful-paintだけなどもできる。
- only performanceで4000行　html1個253KB
- only performanceのjsonもviewerに読ませられる。その場合、PerformanceのみのHTMLが出力される

## 評価に値する指標
- lighthouseで上に表示される項目が見れればとりあえず良さそう
- First Contentful Paint
- Time to Interactive
- Speed Index
- Total Blocking Time
- Largest Contentful Paint
- Cumulative Layout Shift
