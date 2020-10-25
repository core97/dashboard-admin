import { useState } from "react";
import { Check as CheckIcon } from '@icons/Check';
import { Chevron as ChevronIcon } from '@icons/Chevron';

interface ISelectOption {
  option: string;
  isSelected: boolean;
}

interface IProps {
  label?: string;
  defaultValue?: string;
  options: ISelectOption[];
}

export const Select = ({ label, defaultValue, options }: IProps) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectOptions, setSelectOptions] = useState<ISelectOption[]>(options);

  const handleClickOption = (data: ISelectOption) => {
    setShowDropdown(false);
    setSelectOptions(
      selectOptions.map((eachOption) => {
        return {
          ...eachOption,
          isSelected: eachOption.option === data.option ? true : false,
        };
      })
    );
  };

  return (
    <div className="space-y-1">
      {label && (
        <label
          id="listbox-label"
          className="block text-base leading-5 font-medium text-gray-700 mb-3"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <span
          className="inline-block w-full rounded-md shadow-sm"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-indigo-500 focus:shadow transition ease-in-out duration-150 sm:text-sm sm:leading-5 md:text-base hover:cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <span className="block truncate">
                {selectOptions.find((eachItem) => eachItem.isSelected === true)
                  ? selectOptions.find(
                      (eachItem) => eachItem.isSelected === true
                    ).option
                  : defaultValue}
              </span>
            </div>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronIcon />
            </span>
          </button>
        </span>

        {/* Select dropdown */}
        {showDropdown && (
          <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
            <ul
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              className="max-h-56 rounded-md py-1 leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5 md:text-base"
            >
              {selectOptions.map((eachOption) => (
                <li
                  onClick={() => handleClickOption(eachOption)}
                  id="listbox-item-0"
                  role="option"
                  className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:cursor-pointer hover:bg-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className={`block ${
                        eachOption.isSelected ? "font-semibold" : "font-normal"
                      } truncate`}
                    >
                      {eachOption.option}
                    </span>
                  </div>
                  {/* Checkmark, only display for selected option. */}
                  {eachOption.isSelected && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                      {/* Heroicon name: check */}
                      <CheckIcon />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
