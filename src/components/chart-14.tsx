import React from 'react';

export const Chart14 = () => {
  return (
    <table>
      <thead>
      <tr>
        <th colSpan={2}>类型</th>
        <th>单数</th>
        <th>总计</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td rowSpan={4}>来料加工</td>
        <td>01</td>
        <td>10</td>
        <td rowSpan={4}>80</td>
      </tr>
      <tr>
        <td>02</td>
        <td>20</td>
      </tr>
      <tr>
        <td>03</td>
        <td>20</td>
      </tr>
      <tr>
        <td>04</td>
        <td>30</td>
      </tr>
      <tr>
        <td rowSpan={2}>出料统计</td>
        <td>01</td>
        <td>22</td>
        <td rowSpan={2}>44</td>
      </tr>
      <tr>
        <td>02</td>
        <td>22</td>
      </tr>
      <tr>
        <td rowSpan={3}>施工统计</td>
        <td>01</td>
        <td>40</td>
        <td rowSpan={3}>68</td>
      </tr>
      <tr>
        <td>02</td>
        <td>22</td>
      </tr>
      <tr>
        <td>03</td>
        <td>45</td>
      </tr>
      <tr>
        <td rowSpan={2}>竣工统计</td>
        <td>01</td>
        <td>32</td>
        <td rowSpan={2}>102</td>
      </tr>
      <tr>
        <td>02</td>
        <td>80</td>
      </tr>
      </tbody>
    </table>
  );
};
