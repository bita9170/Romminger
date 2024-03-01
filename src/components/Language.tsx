"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { languages } from "@/../config";

import Image from "next/image";

const Language = () => {
  const { local } = useParams<{ local: string }>();

  const router = useRouter();

  const onSelectChange = (value: string) => {
    router.replace(`/${value}`);
  };

  return (
    <div className="languages">
      <Select value={local} onValueChange={onSelectChange}>
        <SelectTrigger>
          <SelectValue>
            <Image
              src={`/languages/${local}.png`}
              alt={local}
              width={40}
              height={40}
              className="mr-2"
            />
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {languages.map((item) => (
              <SelectItem value={item.id} key={item.name}>
                <div className="flex gap-2">
                  <Image
                    src={`/languages/${item.id}.png`}
                    alt={local}
                    width={20}
                    height={20}
                  />
                  {item.name}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Language;
