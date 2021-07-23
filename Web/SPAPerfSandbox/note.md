## 使えそうなもの
- EvaluateScriptは簡単に撮れる
- ファイル名、所要時間（dur)など
{"args":{"data":{"columnNumber":1,"frame":"1281D580348E197522BAF84A8216169C","lineNumber":1,"url":"https://www.google-analytics.com/analytics.js"}},"cat":"devtools.timeline","dur":18877,"name":"EvaluateScript","ph":"X","pid":79218,"tdur":15963,"tid":775,"ts":795530310970,"tts":384117},

## snapshot
- BASE64形式で撮れるが、文字列まで完全に一緒にはならない？
- BSEE64はChromeでみられる　data:image/jpeg;base64,[base64]
- tsは撮れる osが起動してからの時間という説がある
- click eventも取れる nameがEventDispatchになっている(durも取れる　guiでみたのと同じ）
- ロード時間はclick eventのtsと、screenshotが最終版となったやつのtsで良さそう
