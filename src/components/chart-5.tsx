import React from 'react';

export const Chart5 = () => {
  return (
    <div className="战果">
      <h2>往年装车量对比</h2>
      <table>
        <thead>
        <tr>
          <th>年份</th><th>装载量</th><th>卸载量</th><th>车牌号</th><th>现勘录入</th>
          <th>质检录入</th><th>门岗录入</th><th>统计人</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2015</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>王三</td>
        </tr>
        <tr>
          <td>2016</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>李四</td>
        </tr>
        <tr>
          <td>2017</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>招儿</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
