import React from 'react';
import { StyledPaper, StyledGrid, StyledItem } from './ThemeSelectorStyles';
import { MdAdd } from 'react-icons/md';

function ThemeSelector() {
  return (
    <StyledPaper>
      <h4 className="paper-heading">Navigation Theme</h4>
      <StyledGrid>
        {data.map(item => (
          <div key={item.prop}>
            <StyledItem code={item.prop}>
              <ul className="theme-list">
                <li>
                  <p className="filler-line-1" />
                </li>
                <li>
                  <p className="filler-line-2" />
                </li>
                <li>
                  <p className="filler-line-3" />
                </li>
              </ul>
            </StyledItem>
            <p className="theme-title">{item.name}</p>
          </div>
        ))}
        <div>
          <button className="suggest">
            <MdAdd className="plus-icon" />
          </button>
          <p className="theme-title">Suggest One!</p>
        </div>
      </StyledGrid>
    </StyledPaper>
  );
}

export default ThemeSelector;

const data = [
  { name: 'The Purps', prop: 'purps' },
  { name: 'Tatooine', prop: 'tatooine' },
  { name: 'Endor', prop: 'endor' },
  { name: 'The Biz', prop: 'biz' },
  { name: 'Grape Juice', prop: 'grape' },
  { name: 'My Boy Blue', prop: 'blue' },
  { name: 'Winterfell', prop: 'winter' },
];
