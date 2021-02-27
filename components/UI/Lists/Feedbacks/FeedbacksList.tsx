import React, { ChangeEvent, FC } from 'react';
import { connect } from 'react-redux';

import Feedback from './Feedback/Feedback';
import { useDispatch } from 'react-redux';

import { setAsBuy, setAsSell } from '../../../../store/actions/app/app';

import { IApp } from '../../../../interfaces/store/reducers/reducers';

import {
  Container,
  Header,
  HeaderBtnDiv,
  HeaderTitleLeft,
  HeaderTitle,
  AllPositiveNegative,
  AllPositiveNegativeDiv,
  List
} from '../../../../styles/components/UI/Lists/Feedbacks/FeedbacksList';

const mapStateToProps = ({ app }) => ({ app });

const FeedbacksList: FC<{ app: IApp }> = ({ app }) => {
  const dispatch = useDispatch();

  function selectAsBuy(): void {
    dispatch(setAsBuy());
  }

  function selectAsSell(): void {
    dispatch(setAsSell());
  }

  return (
    <Container>
      <Header>
        <HeaderBtnDiv>
          <HeaderTitleLeft
            className={app.type && 'selected'}
            onClick={() => selectAsBuy()}
          >
            From Buyers
          </HeaderTitleLeft>
          <HeaderTitle
            className={!app.type && 'selected'}
            onClick={() => selectAsSell()}
          >
            From Sellers
          </HeaderTitle>
        </HeaderBtnDiv>
        <AllPositiveNegativeDiv>
          <AllPositiveNegative className="selected">
            All (6)
          </AllPositiveNegative>
          <AllPositiveNegative>Positive (5)</AllPositiveNegative>
          <AllPositiveNegative>Negative (1)</AllPositiveNegative>
        </AllPositiveNegativeDiv>
      </Header>
      <List>
        {[6, 6, 7, 3].map((el) => (
          <Feedback />
        ))}
      </List>
    </Container>
  );
};

export default connect(mapStateToProps)(FeedbacksList);
