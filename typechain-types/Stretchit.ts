/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface StretchitInterface extends utils.Interface {
  functions: {
    "allow()": FunctionFragment;
    "balanceOf()": FunctionFragment;
    "createNewUser()": FunctionFragment;
    "owner()": FunctionFragment;
    "viewUsersContracts(address)": FunctionFragment;
    "widthdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allow"
      | "balanceOf"
      | "createNewUser"
      | "owner"
      | "viewUsersContracts"
      | "widthdraw"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "allow", values?: undefined): string;
  encodeFunctionData(functionFragment: "balanceOf", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createNewUser",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "viewUsersContracts",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "widthdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "allow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createNewUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "viewUsersContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "widthdraw", data: BytesLike): Result;

  events: {
    "Allowed(address)": EventFragment;
    "Created(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Allowed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Created"): EventFragment;
}

export interface AllowedEventObject {
  userAddress: string;
}
export type AllowedEvent = TypedEvent<[string], AllowedEventObject>;

export type AllowedEventFilter = TypedEventFilter<AllowedEvent>;

export interface CreatedEventObject {
  userContractAddress: string;
}
export type CreatedEvent = TypedEvent<[string], CreatedEventObject>;

export type CreatedEventFilter = TypedEventFilter<CreatedEvent>;

export interface Stretchit extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StretchitInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allow(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(overrides?: CallOverrides): Promise<[number]>;

    createNewUser(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    viewUsersContracts(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    widthdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  allow(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(overrides?: CallOverrides): Promise<number>;

  createNewUser(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  viewUsersContracts(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  widthdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allow(overrides?: CallOverrides): Promise<void>;

    balanceOf(overrides?: CallOverrides): Promise<number>;

    createNewUser(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    viewUsersContracts(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    widthdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Allowed(address)"(userAddress?: null): AllowedEventFilter;
    Allowed(userAddress?: null): AllowedEventFilter;

    "Created(address)"(userContractAddress?: null): CreatedEventFilter;
    Created(userContractAddress?: null): CreatedEventFilter;
  };

  estimateGas: {
    allow(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(overrides?: CallOverrides): Promise<BigNumber>;

    createNewUser(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    viewUsersContracts(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    widthdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allow(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createNewUser(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    viewUsersContracts(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    widthdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
