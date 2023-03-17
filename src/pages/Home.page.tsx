import { useState, useEffect } from 'react';

import { Alert, Title, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

import { HeaderAction } from '../components/HeaderAction.component';
import { LeadGrid } from '../components/LeadGrid.component';

export function Home() {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dalle.allweezy.repl.co/api/v1/post', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          const result = await response.json();
          setAllPosts(result.data.reverse());
        }
      } catch (error: any) {
        <Alert icon={<IconAlertCircle size="1rem" />} title="Bummer!" color="red">
          {error}
        </Alert>;
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <HeaderAction />
      <Title order={1} align="center" color="white">
        Community Collection
      </Title>
      <Text style={{ marginTop: '10px' }} align="center">
        Check out images generated by the community!
      </Text>
      <LeadGrid data={allPosts} />
    </div>
  );
}