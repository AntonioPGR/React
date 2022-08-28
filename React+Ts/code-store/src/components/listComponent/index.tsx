interface PropsListComponents<T> {
  components: T[]
  returnFunction: (value: T, index: number) => JSX.Element;
}
export function ListComponent<T>({components, returnFunction}:PropsListComponents<T>){
  return (
    <>
      {
        components.map(returnFunction)
      }
    </>
  );
}