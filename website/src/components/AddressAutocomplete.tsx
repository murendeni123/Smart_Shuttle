"use client";

import { useRef, useEffect, useState } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function AddressAutocomplete({
  value,
  onChange,
  placeholder,
  className,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (!inputRef.current || !window.google?.maps?.places) return;
    if (autocompleteRef.current) return;

    autocompleteRef.current = new google.maps.places.Autocomplete(
      inputRef.current,
      {
        componentRestrictions: { country: "za" },
        fields: ["formatted_address"],
        types: ["address"],
      }
    );

    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current?.getPlace();
      if (place?.formatted_address) {
        setInputValue(place.formatted_address);
        onChange(place.formatted_address);
      }
    });
  }, [onChange]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={placeholder}
      className={className}
      autoComplete="off"
    />
  );
}
