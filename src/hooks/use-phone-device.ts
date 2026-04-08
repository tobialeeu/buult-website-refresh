import { useEffect, useState } from "react";

const PHONE_QUERY = "(pointer: coarse) and (hover: none) and (max-width: 479px)";

export function useIsPhoneDevice() {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(PHONE_QUERY);

    const onChange = () => {
      setIsPhone(mql.matches);
    };

    onChange();
    mql.addEventListener("change", onChange);

    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, []);

  return isPhone;
}
