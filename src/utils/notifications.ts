import { toast, ToastOptions } from 'react-toastify';

type NotificationProps = {
  text: string;
  type?: ToastOptions['type'];
  options?: Omit<ToastOptions, 'type'>;
};

export const notification = (data: NotificationProps) =>
  toast(data.text, { pauseOnHover: true, type: data.type || 'info', ...data.options });
