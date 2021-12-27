import { useRef } from "react";

export default function useArrayRef() {
  const refs = useRef([]);
  refs.current = [];
  return [refs, (el) => el && refs.current.push(el)];
}
