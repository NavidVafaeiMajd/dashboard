// react-timekeeper.d.ts
declare module 'react-timekeeper' {
  import { FC } from 'react';

  export interface TimekeeperChangeData {
    hour: number;
    minute: number;
    formatted: string;
    formatted24: string;
    formatted12: string;
  }

  export interface TimeKeeperProps {
    time?: string;
    onChange?: (data: TimekeeperChangeData) => void;
    switchToMinuteOnHourSelect?: boolean;
  }

  const TimeKeeper: FC<TimeKeeperProps>;

  export default TimeKeeper;
}
