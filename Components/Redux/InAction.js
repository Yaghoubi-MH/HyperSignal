import {Increase} from './Types';

const Increaseer = id => {
  console.log(id, 'ssssasaa');
  return {type: Increase, value: id};
};

export default Increaseer;
