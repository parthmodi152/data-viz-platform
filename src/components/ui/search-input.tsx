import React from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search',
  value,
  onChange,
  className = '',
  inputClassName = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      <Search size={20} className="absolute left-3 top-2.5 text-white" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-gray-2 border border-gray-1 rounded-[5px] py-2 pl-10 pr-3 font-roobert font-medium text-[14px] ${inputClassName}`}
      />
    </div>
  );
};

export { SearchInput }; 