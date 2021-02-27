import React, { useState, useEffect, FC, ChangeEvent, FormEvent } from 'react';
import { connect, useDispatch } from 'react-redux';

import Warnings from '../../Warnings/Warnings';

import {
  Background,
  Container,
  H1,
  Instructions,
  PrivateKeyLabel,
  PrivateKeyLabelDiv,
  PrivateKeyInput,
  PrivateKeysList,
  VerifyBtn,
  SuccessMsg
} from '../../../../styles/components/UI/Modals/VerifyAccount/VerifyAccount';

import { setWarnings, resetWarnings } from '../../../../store/actions/app/app';

const mapStateToProps = ({ app }) => {
  return { app };
};

const VerifyAccount: FC<{ handleCloseVerifyAccount: () => void; app: any }> = ({
  handleCloseVerifyAccount,
  app
}) => {
  const [privateKeysArr, setPrivateKeysArr] = useState<string[]>(
    Array(24).fill('')
  );

  const [success, setSuccess] = useState<boolean>(false);

  const dispatch = useDispatch();

  function checkAllFields(): boolean {
    for (let i = 0; i < privateKeysArr.length; i += 1) {
      if (privateKeysArr[i].length === 0) {
        return false;
      }
    }
    return true;
  }

  function onChangePrivateKey(
    e: ChangeEvent<HTMLInputElement>,
    index: any
  ): void {
    const auxPk = [...privateKeysArr];
    auxPk[index] = e.target.value;
    setPrivateKeysArr(auxPk);
  }

  async function verifyPrivateKeys(): Promise<{
    status_code: number;
    results: {};
    errors: string[];
  }> {
    const res = await fetch(
      `${process.env.USER_API_ENDPOINT}/user/auth/private-keys/verify`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ privateKeys: privateKeysArr })
      }
    );
    const data = await res.json();
    return data;
  }

  async function handleSubmitPrivateKeys(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    dispatch(resetWarnings());
    if (checkAllFields()) {
      const verifyResponse: any = await verifyPrivateKeys();

      if (verifyResponse.status_code === 200) {
        console.log('done');
        setSuccess(true);
        setPrivateKeysArr(Array(24).fill(''));
      } else {
        verifyResponse.errors.map((error) => {
          dispatch(setWarnings(error));
        });
      }
    }
  }

  return (
    <>
      <Background onClick={() => handleCloseVerifyAccount()} />
      <Container onSubmit={(e) => handleSubmitPrivateKeys(e)}>
        {success ? (
          <SuccessMsg>You have successfully activated your account</SuccessMsg>
        ) : (
          <>
            <div>
              <H1>Account Verification</H1>
              <Instructions>
                To successfully verifiy your account yuo should enter all of
                your 24 words private key in fields below.
              </Instructions>
            </div>
            <div>
              <PrivateKeysList>
                {privateKeysArr.map((privateKey: string, index: any) => (
                  <PrivateKeyLabelDiv key={index}>
                    <PrivateKeyLabel htmlFor={`privateKey-${index}`}>
                      {index + 1}
                    </PrivateKeyLabel>
                    <PrivateKeyInput
                      id={`privateKey-${index}`}
                      type="text"
                      onChange={(e) => onChangePrivateKey(e, index)}
                      value={privateKey}
                    />
                  </PrivateKeyLabelDiv>
                ))}
              </PrivateKeysList>
            </div>
            <div>
              <Warnings
                warning={app.warnings.length > 0}
                warningMessages={app.warnings}
              />
              <br />
              <VerifyBtn type="submit">Verify Account</VerifyBtn>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default connect(mapStateToProps)(VerifyAccount);
