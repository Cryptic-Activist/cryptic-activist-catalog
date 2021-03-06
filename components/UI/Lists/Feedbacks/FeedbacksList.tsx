import React, { FC, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FaSortDown } from 'react-icons/fa';

import Feedback from './Feedback/Feedback';
import FeedbackTypeList from './FeedbackTypeList/FeedbackTypeList';

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
  List,
  MobileOpenFeedbacksBtn
} from '../../../../styles/components/UI/Lists/Feedbacks/FeedbacksList';

const mapStateToProps = ({ app }) => ({ app });

const FeedbacksList: FC<{ app: IApp }> = ({ app }) => {
  const dispatch = useDispatch();

  const [toggleType, setToggleType] = useState(false);

  function selectAsBuy(): void {
    dispatch(setAsBuy());
  }

  function selectAsSell(): void {
    dispatch(setAsSell());
  }

  function handleToggleType(): void {
    setToggleType(!toggleType);
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
          {app.isMobile ? (
            <MobileOpenFeedbacksBtn onClick={() => handleToggleType()}>
              <FaSortDown />
              {toggleType && <FeedbackTypeList />}
            </MobileOpenFeedbacksBtn>
          ) : (
            <>
              <AllPositiveNegative className="selected">
                All (6)
              </AllPositiveNegative>
              <AllPositiveNegative>Positive (5)</AllPositiveNegative>
              <AllPositiveNegative>Negative (1)</AllPositiveNegative>
            </>
          )}
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
