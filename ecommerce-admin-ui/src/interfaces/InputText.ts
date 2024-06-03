export interface InputTextProps  {
    title: string;
    type: string;
    id:string;
    name:string;
    register:any
}

export interface ShowPasswordCheckboxProps {
    showPassword: boolean;
    onChange: () => void;
  }