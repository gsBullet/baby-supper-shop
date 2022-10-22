// import react from 'react'
import { useContext } from 'react';
import { SettingContext } from '../context/SettingContext'

function useSetting() {
  return useContext(SettingContext);
}

export default useSetting;