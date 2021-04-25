// Complete `$Diff` type to match the following condition.
// FYI, Flow type has the same name utility type.
type CommonKeys<A, B> = Extract<keyof A, keyof B>;
type DifferenceKey<A, B> = Exclude<keyof A, CommonKeys<A, B>>;
type X = DifferenceKey<Props, Tester>
type $Diff<A, B> = {[K in DifferenceKey<A, B>]: A[K]} & {[X in CommonKeys<A, B>]?: A[X]}

type Props = {
  id: number;
  title: string;
  tags: string[];
};

type Tester = {
  title: string;
}

const defaultProps = {
  tags: [],
};

type RequiredProps = $Diff<Props, typeof defaultProps>;

const props1: RequiredProps = {
  id: 100,
  title: "my post",
};

const props2: RequiredProps = {
  id: 100,
  title: "my post",
  tags: ["ts"],
};

// @ts-expect-error
const props3: RequiredProps = {
  id: 100,
  tags: [],
};

// @ts-expect-error
const props4: RequiredProps = {
  title: "my post",
};
