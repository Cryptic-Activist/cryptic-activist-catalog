import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import {
  Container,
  Background,
  H1,
  Instructions,
  PrivateKeysList,
  PrivateKey,
  CloseModal
} from '../../../../styles/components/UI/Modals/PrivateKeys/PrivateKeys';

import { closeRegisterForm } from '../../../../store/actions/navbar/navbar';

const PrivateKeys: FC<{
  privateKeys: string[];
  handleTogglePrivateKeysModal: () => void;
}> = ({ privateKeys, handleTogglePrivateKeysModal }) => {
  const dispatch = useDispatch();

  function handleClosePrivateKeysModal(): void {
    handleTogglePrivateKeysModal();
    dispatch(closeRegisterForm());
  }

  return (
    <>
      <Background />
      <Container>
        <div>
          <H1>Private keys</H1>
          <Instructions>
            The private keys are used for a few important things on the{' '}
            <strong>Cryptic Activist</strong> platform such as:{' '}
            <strong>account verification</strong>,{' '}
            <strong>password reset</strong>,{' '}
            <strong>transaction confirmation</strong>.
          </Instructions>
          <br />
          <Instructions>
            Make sure to store these 24 words private keys somewhere save. It
            won't be avaiable to retrive at any time.
          </Instructions>
        </div>
        <PrivateKeysList>
          {privateKeys.map((privateKey, key) => (
            <PrivateKey key={key}>{privateKey}</PrivateKey>
          ))}
        </PrivateKeysList>
        <CloseModal
          onClick={() => {
            handleClosePrivateKeysModal();
          }}
        >
          I have stored it safely and understood the consequences of losing it
        </CloseModal>
      </Container>
    </>
  );
};

export default PrivateKeys;
