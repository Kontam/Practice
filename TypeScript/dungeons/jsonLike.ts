type Premitive = string | number | null | boolean;
type JSONObj = {[key:string]: Premitive } | Premitive | Array<Premitive>;
type JSONLike = JSONObj | {[key: string]: JSONObj | Array<JSONObj> } | Array<JSONObj>;

const v1: JSONLike = {};
const v2: JSONLike = [];
const v3: JSONLike = null;
const v4: JSONLike = {
    flag: false,
      name: "name",
        num: 100,
          arr: [{ hoge: "hoge" }],
            optionParam: null,
};

// The following RHSs can not be serialized to JSON
const v5: JSONLike = () => 1; // should be error
const v6: JSONLike = { fn: () => 1 }; // should be error
