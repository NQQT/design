import React from 'react';
import { Badge, Button, Stack } from '@mui/material';
import { storybookSetupTemplate } from '@library/storybook';
import { createDataState, createReactContextState } from 'assets';

const [ContextProvider, useContext] = createReactContextState({
  count: 0,
});

const updateCount = (count) => useContext({ count });

const template = storybookSetupTemplate((args) => {
  return (
    <ContextProvider>
      <TestGroup />
    </ContextProvider>
  );
});

const values = createDataState({
  count: 5,
});

const TestGroup = React.memo(() => {
  const { count } = values();
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="primary">
        <Button
          variant="text"
          onClick={() => {
            values.count++;
          }}
        >
          {count}
        </Button>
      </Badge>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
});

export const ButtonTest = template();

export default {
  title: 'Testing',
};
