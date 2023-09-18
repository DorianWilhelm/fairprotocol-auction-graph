// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Order extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("auctionId", Value.fromBigInt(BigInt.zero()));
    this.set("sellAmount", Value.fromBigInt(BigInt.zero()));
    this.set("buyAmount", Value.fromBigInt(BigInt.zero()));
    this.set("userId", Value.fromBigInt(BigInt.zero()));
    this.set("userAddress", Value.fromBytes(Bytes.empty()));
    this.set("price", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("volume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("txId", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Order entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Order must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Order", id.toString(), this);
    }
  }

  static load(id: string): Order | null {
    return changetype<Order | null>(store.get("Order", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get auctionId(): BigInt {
    let value = this.get("auctionId");
    return value!.toBigInt();
  }

  set auctionId(value: BigInt) {
    this.set("auctionId", Value.fromBigInt(value));
  }

  get sellAmount(): BigInt {
    let value = this.get("sellAmount");
    return value!.toBigInt();
  }

  set sellAmount(value: BigInt) {
    this.set("sellAmount", Value.fromBigInt(value));
  }

  get buyAmount(): BigInt {
    let value = this.get("buyAmount");
    return value!.toBigInt();
  }

  set buyAmount(value: BigInt) {
    this.set("buyAmount", Value.fromBigInt(value));
  }

  get userId(): BigInt {
    let value = this.get("userId");
    return value!.toBigInt();
  }

  set userId(value: BigInt) {
    this.set("userId", Value.fromBigInt(value));
  }

  get userAddress(): Bytes {
    let value = this.get("userAddress");
    return value!.toBytes();
  }

  set userAddress(value: Bytes) {
    this.set("userAddress", Value.fromBytes(value));
  }

  get price(): BigDecimal {
    let value = this.get("price");
    return value!.toBigDecimal();
  }

  set price(value: BigDecimal) {
    this.set("price", Value.fromBigDecimal(value));
  }

  get volume(): BigDecimal {
    let value = this.get("volume");
    return value!.toBigDecimal();
  }

  set volume(value: BigDecimal) {
    this.set("volume", Value.fromBigDecimal(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get txId(): Bytes {
    let value = this.get("txId");
    return value!.toBytes();
  }

  set txId(value: Bytes) {
    this.set("txId", Value.fromBytes(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("address", Value.fromBytes(Bytes.empty()));
    this.set("auctions", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get auctions(): Array<string> {
    let value = this.get("auctions");
    return value!.toStringArray();
  }

  set auctions(value: Array<string>) {
    this.set("auctions", Value.fromStringArray(value));
  }
}

export class AuctionDetail extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("auctionId", Value.fromBigInt(BigInt.zero()));
    this.set("exactOrder", Value.fromString(""));
    this.set("chainId", Value.fromString(""));
    this.set("symbolAuctioningToken", Value.fromString(""));
    this.set("symbolBiddingToken", Value.fromString(""));
    this.set("addressAuctioningToken", Value.fromBytes(Bytes.empty()));
    this.set("addressBiddingToken", Value.fromBytes(Bytes.empty()));
    this.set("decimalsAuctioningToken", Value.fromBigInt(BigInt.zero()));
    this.set("decimalsBiddingToken", Value.fromBigInt(BigInt.zero()));
    this.set("endTimeTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("orderCancellationEndDate", Value.fromBigInt(BigInt.zero()));
    this.set("startingTimeStamp", Value.fromBigInt(BigInt.zero()));
    this.set("minimumBiddingAmountPerOrder", Value.fromBigInt(BigInt.zero()));
    this.set("minFundingThreshold", Value.fromBigInt(BigInt.zero()));
    this.set("allowListManager", Value.fromBytes(Bytes.empty()));
    this.set("allowListSigner", Value.fromBytes(Bytes.empty()));
    this.set("currentVolume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("currentClearingOrderSellAmount", Value.fromBigInt(BigInt.zero()));
    this.set("currentClearingOrderBuyAmount", Value.fromBigInt(BigInt.zero()));
    this.set("currentClearingPrice", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("currentBiddingAmount", Value.fromBigInt(BigInt.zero()));
    this.set("isAtomicClosureAllowed", Value.fromBoolean(false));
    this.set("isPrivateAuction", Value.fromBoolean(false));
    this.set("interestScore", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("usdAmountTraded", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AuctionDetail entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AuctionDetail must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AuctionDetail", id.toString(), this);
    }
  }

  static load(id: string): AuctionDetail | null {
    return changetype<AuctionDetail | null>(store.get("AuctionDetail", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get auctionId(): BigInt {
    let value = this.get("auctionId");
    return value!.toBigInt();
  }

  set auctionId(value: BigInt) {
    this.set("auctionId", Value.fromBigInt(value));
  }

  get exactOrder(): string {
    let value = this.get("exactOrder");
    return value!.toString();
  }

  set exactOrder(value: string) {
    this.set("exactOrder", Value.fromString(value));
  }

  get chainId(): string {
    let value = this.get("chainId");
    return value!.toString();
  }

  set chainId(value: string) {
    this.set("chainId", Value.fromString(value));
  }

  get orders(): Array<string> | null {
    let value = this.get("orders");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set orders(value: Array<string> | null) {
    if (!value) {
      this.unset("orders");
    } else {
      this.set("orders", Value.fromStringArray(<Array<string>>value));
    }
  }

  get ordersWithoutClaimed(): Array<string> | null {
    let value = this.get("ordersWithoutClaimed");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set ordersWithoutClaimed(value: Array<string> | null) {
    if (!value) {
      this.unset("ordersWithoutClaimed");
    } else {
      this.set(
        "ordersWithoutClaimed",
        Value.fromStringArray(<Array<string>>value)
      );
    }
  }

  get symbolAuctioningToken(): string {
    let value = this.get("symbolAuctioningToken");
    return value!.toString();
  }

  set symbolAuctioningToken(value: string) {
    this.set("symbolAuctioningToken", Value.fromString(value));
  }

  get symbolBiddingToken(): string {
    let value = this.get("symbolBiddingToken");
    return value!.toString();
  }

  set symbolBiddingToken(value: string) {
    this.set("symbolBiddingToken", Value.fromString(value));
  }

  get addressAuctioningToken(): Bytes {
    let value = this.get("addressAuctioningToken");
    return value!.toBytes();
  }

  set addressAuctioningToken(value: Bytes) {
    this.set("addressAuctioningToken", Value.fromBytes(value));
  }

  get addressBiddingToken(): Bytes {
    let value = this.get("addressBiddingToken");
    return value!.toBytes();
  }

  set addressBiddingToken(value: Bytes) {
    this.set("addressBiddingToken", Value.fromBytes(value));
  }

  get decimalsAuctioningToken(): BigInt {
    let value = this.get("decimalsAuctioningToken");
    return value!.toBigInt();
  }

  set decimalsAuctioningToken(value: BigInt) {
    this.set("decimalsAuctioningToken", Value.fromBigInt(value));
  }

  get decimalsBiddingToken(): BigInt {
    let value = this.get("decimalsBiddingToken");
    return value!.toBigInt();
  }

  set decimalsBiddingToken(value: BigInt) {
    this.set("decimalsBiddingToken", Value.fromBigInt(value));
  }

  get endTimeTimestamp(): BigInt {
    let value = this.get("endTimeTimestamp");
    return value!.toBigInt();
  }

  set endTimeTimestamp(value: BigInt) {
    this.set("endTimeTimestamp", Value.fromBigInt(value));
  }

  get orderCancellationEndDate(): BigInt {
    let value = this.get("orderCancellationEndDate");
    return value!.toBigInt();
  }

  set orderCancellationEndDate(value: BigInt) {
    this.set("orderCancellationEndDate", Value.fromBigInt(value));
  }

  get startingTimeStamp(): BigInt {
    let value = this.get("startingTimeStamp");
    return value!.toBigInt();
  }

  set startingTimeStamp(value: BigInt) {
    this.set("startingTimeStamp", Value.fromBigInt(value));
  }

  get minimumBiddingAmountPerOrder(): BigInt {
    let value = this.get("minimumBiddingAmountPerOrder");
    return value!.toBigInt();
  }

  set minimumBiddingAmountPerOrder(value: BigInt) {
    this.set("minimumBiddingAmountPerOrder", Value.fromBigInt(value));
  }

  get minFundingThreshold(): BigInt {
    let value = this.get("minFundingThreshold");
    return value!.toBigInt();
  }

  set minFundingThreshold(value: BigInt) {
    this.set("minFundingThreshold", Value.fromBigInt(value));
  }

  get allowListManager(): Bytes {
    let value = this.get("allowListManager");
    return value!.toBytes();
  }

  set allowListManager(value: Bytes) {
    this.set("allowListManager", Value.fromBytes(value));
  }

  get allowListSigner(): Bytes {
    let value = this.get("allowListSigner");
    return value!.toBytes();
  }

  set allowListSigner(value: Bytes) {
    this.set("allowListSigner", Value.fromBytes(value));
  }

  get currentVolume(): BigDecimal {
    let value = this.get("currentVolume");
    return value!.toBigDecimal();
  }

  set currentVolume(value: BigDecimal) {
    this.set("currentVolume", Value.fromBigDecimal(value));
  }

  get currentClearingOrderSellAmount(): BigInt {
    let value = this.get("currentClearingOrderSellAmount");
    return value!.toBigInt();
  }

  set currentClearingOrderSellAmount(value: BigInt) {
    this.set("currentClearingOrderSellAmount", Value.fromBigInt(value));
  }

  get currentClearingOrderBuyAmount(): BigInt {
    let value = this.get("currentClearingOrderBuyAmount");
    return value!.toBigInt();
  }

  set currentClearingOrderBuyAmount(value: BigInt) {
    this.set("currentClearingOrderBuyAmount", Value.fromBigInt(value));
  }

  get currentClearingPrice(): BigDecimal {
    let value = this.get("currentClearingPrice");
    return value!.toBigDecimal();
  }

  set currentClearingPrice(value: BigDecimal) {
    this.set("currentClearingPrice", Value.fromBigDecimal(value));
  }

  get currentBiddingAmount(): BigInt {
    let value = this.get("currentBiddingAmount");
    return value!.toBigInt();
  }

  set currentBiddingAmount(value: BigInt) {
    this.set("currentBiddingAmount", Value.fromBigInt(value));
  }

  get isAtomicClosureAllowed(): boolean {
    let value = this.get("isAtomicClosureAllowed");
    return value!.toBoolean();
  }

  set isAtomicClosureAllowed(value: boolean) {
    this.set("isAtomicClosureAllowed", Value.fromBoolean(value));
  }

  get isPrivateAuction(): boolean {
    let value = this.get("isPrivateAuction");
    return value!.toBoolean();
  }

  set isPrivateAuction(value: boolean) {
    this.set("isPrivateAuction", Value.fromBoolean(value));
  }

  get interestScore(): BigDecimal {
    let value = this.get("interestScore");
    return value!.toBigDecimal();
  }

  set interestScore(value: BigDecimal) {
    this.set("interestScore", Value.fromBigDecimal(value));
  }

  get usdAmountTraded(): BigDecimal {
    let value = this.get("usdAmountTraded");
    return value!.toBigDecimal();
  }

  set usdAmountTraded(value: BigDecimal) {
    this.set("usdAmountTraded", Value.fromBigDecimal(value));
  }
}
