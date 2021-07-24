export type SnapShot = {
  args: {
    snapshot: string;
  },
  cat: string;
  id: string;
  name: 'Screenshot';
  ph: string;
  pid: number;
  tid: number;
  ts: number;
};

const clickJson = {"args":{"data":{"type":"click"}},"cat":"devtools.timeline","dur":28161,"name":"EventDispatch","ph":"X","pid":90613,"tdur":28033,"tid":775,"ts":898107956969,"tts":352370}
export type ClickEvent = typeof clickJson;
