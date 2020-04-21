import Mutation from './Mutation';
import Query from './Query';

// Inputs
import InputDefs from './input';

// Types
import TypesDefs from './types';

const TypeDefs = [
  ...InputDefs,
  ...TypesDefs,
  Mutation,
  Query,
];

export default TypeDefs;
