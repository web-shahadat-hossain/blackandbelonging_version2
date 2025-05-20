import Button from '../../components/common/Button/Button';
import styles from './EmailVerifyModal.module.scss';
import Modal from '../../components/common/Modals/Modal/Modal';
import { useEffect, useState } from 'react';

type propTypes = {
  title?: string;
  subtext?: string;
  handleNext?: (...args: any) => Promise<boolean>;
  handleClose?: () => void;
  show?: boolean;
  loading?: boolean;
  placeholder?: string;
};

const EmailVerifyModal = (props: propTypes) => {
  const [input, setInput] = useState('');

  useEffect(()=>{
   setInput('')
  },[])

  return (
    <Modal
      show={props.show}
      className={styles.confirmation}
      handleClose={()=> {
        setInput('')
        props.handleClose()
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.subtext}</p>

      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={props.placeholder} />
      <div className={styles.action}>
        <Button
          loading={props.loading}
          onClick={ () => {
            if(input !== ''){
             const result =  props.handleNext(input)

             if(result){
              setInput('')
             }
              
            }
          }}
          fluid
        >
          Continue
        </Button>
        <Button variant="bordered_danger" onClick={()=> {
          setInput('')
          props.handleClose();
        }} fluid>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default EmailVerifyModal;
