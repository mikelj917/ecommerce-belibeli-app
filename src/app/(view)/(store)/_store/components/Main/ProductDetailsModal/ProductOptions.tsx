"use client";
import type { ProductInclude } from "@/shared/types/Includes";
import { ProductOptionSelect } from "./ProductOptionSelect";
import { useState } from "react";

type ProductOptionsArray = ProductInclude["productOption"];

type ProductOptionsProps = {
  productOptions: ProductOptionsArray;
};

const getInitialState = (options: ProductOptionsArray): Record<string, string> => {
  return options.reduce(
    (acc, option) => {
      acc[option.id] = option.values[0]?.value || "";
      return acc;
    },
    {} as Record<string, string>,
  );
};

export const ProductOptions = ({ productOptions }: ProductOptionsProps) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() =>
    getInitialState(productOptions),
  );

  const handleSelectOption = (optionId: number, value: string) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionId]: value,
    }));
  };

  if (!productOptions || productOptions.length < 1) {
    return <h1 className="text-red-500">Falha ao carregar as opções do produto</h1>;
  }

  return (
    <div className="space-y-5">
      {productOptions.map((option) => {
        const currentSelectedValue = selectedOptions[option.id];

        return (
          <div key={option.id}>
            {/* Título e Valor Selecionado */}
            <div className="mb-2 flex items-center gap-2">
              <h1 className="font-bold text-gray-900">{`${option.type}:`}</h1>
              <span className="text-gray-900">{currentSelectedValue}</span>
            </div>

            {/* Botões de Seleção */}
            <div className="flex gap-3">
              {option.values.map((value) => (
                <ProductOptionSelect
                  key={value.id}
                  onClick={() => handleSelectOption(option.id, value.value)}
                  value={value.value}
                  selectedValue={currentSelectedValue}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
