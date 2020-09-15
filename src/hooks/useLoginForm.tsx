import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase';

export const useLoginForm = (): {
  email: string;
  handleEmail: (e: string) => void;
  password: string;
  handlePassword: (p: string) => void;
  submitLoginForm: (h: any) => void;
} => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmail = (e: string) => {
    console.log(e);
    // 必要であればバリデーション処理
    setEmail(e);
  };

  const handlePassword = (p: string) => {
    setPassword(p);
  };

  const submitLoginForm = (history: any) => {
    // const history = useHistory();
    history.push('/calendar');
    console.log('submit処理');
  };

  return { email, handleEmail, password, handlePassword, submitLoginForm };
};
