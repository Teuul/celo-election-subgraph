import { 
	ValidatorGroupMarkedEligible,
	ValidatorGroupMarkedIneligible,
	ValidatorGroupVoteCast,
	ValidatorGroupVoteActivated,
	ValidatorGroupPendingVoteRevoked,
	ValidatorGroupActiveVoteRevoked,
	EpochRewardsDistributedToVoters
} from '../generated/Election/Election';
import { Event, Field, ArrayField, Item } from '../generated/schema';
import { ethereum } from '@graphprotocol/graph-ts';
import { handleEvent } from './utils/utils';

export function handleValidatorGroupMarkedEligible(event: ValidatorGroupMarkedEligible): void {
  handleEvent(event,"ValidatorGroupMarkedEligible");
}

export function handleValidatorGroupMarkedIneligible(event: ValidatorGroupMarkedIneligible): void {
  handleEvent(event,"ValidatorGroupMarkedIneligible");
}

export function handleValidatorGroupVoteCast(event: ValidatorGroupVoteCast): void {
  handleEvent(event,"ValidatorGroupVoteCast");
}

export function handleValidatorGroupVoteActivated(event: ValidatorGroupVoteActivated): void {
  handleEvent(event,"ValidatorGroupVoteActivated");
}

export function handleValidatorGroupPendingVoteRevoked(event: ValidatorGroupPendingVoteRevoked): void {
  handleEvent(event,"ValidatorGroupPendingVoteRevoked");
}

export function handleValidatorGroupActiveVoteRevoked(event: ValidatorGroupActiveVoteRevoked): void {
  handleEvent(event,"ValidatorGroupActiveVoteRevoked");
}

export function handleEpochRewardsDistributedToVoters(event: EpochRewardsDistributedToVoters): void {
  handleEvent(event,"EpochRewardsDistributedToVoters");
}