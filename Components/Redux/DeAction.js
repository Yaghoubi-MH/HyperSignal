import {Deletes} from './Types';

const Deletea = id => {
  console.log(id, 'dd');
  return {type: Deletes, value: id};
};

export default Deletea;
