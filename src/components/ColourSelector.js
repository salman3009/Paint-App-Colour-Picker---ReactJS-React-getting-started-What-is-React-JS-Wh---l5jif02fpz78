import React from 'react';

const ColourSelector = (props) => {
  console.log(props);
  const { config, selectNextBackground } = props
  const {label, classname, background } = config;
  return (
    <button className={classname} onClick={() => selectNextBackground({background: background})}>{label}</button>
  )
}
export default ColourSelector;