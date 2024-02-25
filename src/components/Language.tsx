"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useTransition } from "react";
import { useRouter } from "next/navigation";
import { languages } from "../../config";
import Image from "next/image";

const Language = () => {
  const router = useRouter();

  const handleClick = (value: string) => {
    const nextLocal = value;
    router.replace(`/${nextLocal}`);
  };

  return (
    <Select value="DE" onValueChange={handleClick}>
      <SelectTrigger>
        <SelectValue>DE</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages.map((item) => (
            <SelectItem key={item.name} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Language;
